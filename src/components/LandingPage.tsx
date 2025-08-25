import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Heart, 
  Shield, 
  Users, 
  Building2,
  ArrowRight,
  Stethoscope,
  CheckCircle
} from 'lucide-react';

interface LandingPageProps {
  onSelectUserType: (type: 'hospital' | 'individual') => void;
}

export default function LandingPage({ onSelectUserType }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Brand Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-4 rounded-2xl shadow-lg">
                <Heart className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  LifeLink
                </h1>
                <p className="text-xl text-gray-600">Organ & Blood Donation Platform</p>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Connecting Lives,<br />
              <span className="text-red-600">Saving Futures</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our comprehensive platform that connects donors, recipients, and healthcare providers 
              to save lives through efficient organ and blood donation management.
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Hospital Registration */}
            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10 text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-6 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Building2 className="h-12 w-12" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Hospital & Healthcare Provider
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Manage donors, recipients, and coordinate life-saving donations
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                {/* Hero Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhvc3BpdGFsJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTYwNTgzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medical team collaboration in hospital"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Advanced matching algorithms for donor-recipient compatibility</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Real-time alert system for urgent donation needs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Comprehensive patient and donor management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>HIPAA-compliant medical data security</span>
                  </div>
                </div>

                <Button 
                  onClick={() => onSelectUserType('hospital')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  Register as Healthcare Provider
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Individual Registration */}
            <Card className="relative overflow-hidden border-2 border-transparent hover:border-red-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10 text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 text-red-600 p-6 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <Heart className="h-12 w-12" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Individual Donor & Recipient
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Save lives by donating or find compatible donors for your needs
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                {/* Hero Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZyUyMHBlb3BsZXxlbnwxfHx8fDE3NTYwNTgzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community volunteers helping people"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span>Register as both donor and recipient in one account</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span>Create donation requests for blood or organs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span>Receive instant alerts for donation opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span>Connect with nearby hospitals and other donors</span>
                  </div>
                </div>

                <Button 
                  onClick={() => onSelectUserType('individual')}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-lg py-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  Join as Individual
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Trusted by Healthcare Professionals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h4>
                <p className="text-gray-600">Enterprise-grade security for medical data protection</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Medical Grade</h4>
                <p className="text-gray-600">Built with healthcare professionals for accurate matching</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community Driven</h4>
                <p className="text-gray-600">Connecting communities to save lives together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}