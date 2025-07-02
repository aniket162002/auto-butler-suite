import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Code, Zap, Search, Filter } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "Email Marketing Automation",
      description: "Automate email campaigns with AI-powered personalization",
      category: "Marketing",
      price: "$29",
      rating: 4.8,
      reviews: 142,
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 2,
      title: "Customer Support Chatbot",
      description: "AI chatbot for 24/7 customer support and ticket routing",
      category: "Support",
      price: "$49",
      rating: 4.9,
      reviews: 89,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 3,
      title: "Social Media Scheduler",
      description: "Auto-schedule and optimize social media posts across platforms",
      category: "Marketing",
      price: "$19",
      rating: 4.7,
      reviews: 203,
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 4,
      title: "Invoice Processing System",
      description: "Automated invoice generation and payment tracking",
      category: "Finance",
      price: "$39",
      rating: 4.6,
      reviews: 76,
      image: "photo-1518770660439-4636190af475"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            🚀 Browse Templates
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Automation Templates
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover pre-built workflows to automate your business processes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search templates..." className="pl-10" />
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="support">Support</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-elegant transition-smooth cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={`https://images.unsplash.com/${template.image}?w=400&h=200&fit=crop`}
                  alt={template.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{template.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
                    {template.price}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{template.title}</CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {template.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{template.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({template.reviews})
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Code className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Templates;