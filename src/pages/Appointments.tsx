import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Stethoscope } from "lucide-react";

const Appointments = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const doctors = [
    { id: "1", name: "Dr. Sarah Johnson", specialty: "Cardiology", available: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
    { id: "2", name: "Dr. Michael Chen", specialty: "Dermatology", available: ["09:30", "10:30", "11:30", "14:30", "15:30"] },
    { id: "3", name: "Dr. Emily Davis", specialty: "Pediatrics", available: ["09:00", "10:30", "11:00", "14:00", "15:30"] },
    { id: "4", name: "Dr. James Wilson", specialty: "Orthopedics", available: ["08:30", "09:30", "10:00", "13:30", "14:30"] },
  ];

  const handleBooking = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      // TODO: Implement booking logic with Supabase
      console.log("Booking:", { selectedDoctor, selectedDate, selectedTime });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Book Your Appointment</h1>
          <p className="text-xl text-muted-foreground">Choose your doctor and preferred time</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Doctor Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                Select Doctor
              </CardTitle>
              <CardDescription>Choose from our experienced medical professionals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedDoctor === doctor.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Date & Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Select Date & Time
              </CardTitle>
              <CardDescription>Pick your preferred appointment slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Time Selection */}
              {selectedDoctor && selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Available Times</label>
                  <div className="grid grid-cols-3 gap-2">
                    {doctors
                      .find((d) => d.id === selectedDoctor)
                      ?.available.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="flex items-center gap-1"
                        >
                          <Clock className="h-3 w-3" />
                          {time}
                        </Button>
                      ))}
                  </div>
                </div>
              )}

              {/* Book Button */}
              <Button
                onClick={handleBooking}
                disabled={!selectedDoctor || !selectedDate || !selectedTime}
                className="w-full mt-6"
                size="lg"
              >
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointments;