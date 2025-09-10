'use client'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, Edit, Trash2, Star, Image as ImageIcon } from 'lucide-react'
import { api } from '@/lib/api'
import { toast } from 'react-hot-toast'
import { formatDistanceToNow } from 'date-fns'

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  
  const { data: gallery, refetch } = useQuery('gallery', async () => {
    const response = await api.get('/gallery')
    return response.data
  })

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this gallery item?')) {
      try {
        await api.delete(`/gallery/${id}`)
        toast.success('Gallery item deleted successfully')
        refetch()
      } catch (error) {
        toast.error('Failed to delete gallery item')
      }
    }
  }

  const handleToggleFeatured = async (id: string, featured: boolean) => {
    try {
      await api.patch(`/gallery/${id}`, { featured: !featured })
      toast.success(`Item ${!featured ? 'featured' : 'unfeatured'}`)
      refetch()
    } catch (error) {
      toast.error('Failed to update item status')
    }
  }

  const filteredGallery = gallery?.filter((item: any) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter
    
    return matchesSearch && matchesCategory
  }) || []

  const categories = [...new Set(gallery?.map((item: any) => item.category) || [])]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-600">Manage gallery images and media</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Gallery Items</CardTitle>
              <CardDescription>
                {filteredGallery.length} items found
              </CardDescription>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGallery.map((item: any) => (
              <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex space-x-1">
                      {item.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2 capitalize">
                    {item.category}
                  </p>
                  
                  {item.description && (
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  
                  <p className="text-xs text-gray-400 mb-3">
                    {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleFeatured(item.id, item.featured)}
                      className={item.featured ? 'bg-yellow-50 text-yellow-700' : ''}
                    >
                      <Star className="h-4 w-4 mr-1" />
                      {item.featured ? 'Featured' : 'Feature'}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No gallery items found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}