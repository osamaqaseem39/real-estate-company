'use client'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react'
import { api } from '@/lib/api'
import { toast } from 'react-hot-toast'

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: properties, refetch } = useQuery('properties', async () => {
    const response = await api.get('/properties')
    return response.data
  })

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this property?')) {
      try {
        await api.delete(`/properties/${id}`)
        toast.success('Property deleted successfully')
        refetch()
      } catch (error) {
        toast.error('Failed to delete property')
      }
    }
  }

  const filteredProperties = properties?.filter((property: any) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-600">Manage your property portfolio</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Properties</CardTitle>
              <CardDescription>
                {filteredProperties.length} properties found
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property: any) => (
              <div key={property.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                {property.images && property.images.length > 0 && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={property.images[0].url}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                      {property.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      property.status === 'available' 
                        ? 'bg-green-100 text-green-800'
                        : property.status === 'sold'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                  <p className="text-2xl font-bold text-primary-600 mb-3">
                    ${property.price.toLocaleString()}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.area} sq ft</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDelete(property.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No properties found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}