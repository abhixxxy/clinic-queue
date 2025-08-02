import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, MapPin, Phone, Mail } from "lucide-react";

const Profile = () => {
  // Mock user data - will be replaced with Supabase data
  const userAppointments = [
    {
      id: "1",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-01-15",
      time: "10:00",
      status: "confirmed"
    },
    {
      id: "2",
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology",
      date: "2024-01-20",
      time: "14:30",
      status: "pending"
    }
  ];

  const userInfo = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-xl text-muted-foreground">Manage your account and appointments</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Information */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{userInfo.name}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{userInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{userInfo.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-foreground">{userInfo.address}</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Appointments */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                My Appointments
              </CardTitle>
              <CardDescription>View and manage your upcoming appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 rounded-lg border border-border bg-card"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      </div>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {appointment.time}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
                
                {userAppointments.length === 0 && (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No appointments scheduled</p>
                    <Button className="mt-4">Book Your First Appointment</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;