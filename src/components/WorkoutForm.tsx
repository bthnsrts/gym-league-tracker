import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Dumbbell, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WorkoutData {
  date: string;
  weightliftingMinutes: number;
  cardioMinutes: number;
}

interface WorkoutFormProps {
  onWorkoutAdded: (workout: WorkoutData) => void;
}

const WorkoutForm = ({ onWorkoutAdded }: WorkoutFormProps) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [weightliftingMinutes, setWeightliftingMinutes] = useState("");
  const [cardioMinutes, setCardioMinutes] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!weightliftingMinutes && !cardioMinutes) {
      toast({
        title: "Invalid workout",
        description: "Please enter at least some minutes for weightlifting or cardio.",
        variant: "destructive",
      });
      return;
    }

    const workout: WorkoutData = {
      date,
      weightliftingMinutes: parseInt(weightliftingMinutes) || 0,
      cardioMinutes: parseInt(cardioMinutes) || 0,
    };

    onWorkoutAdded(workout);
    
    toast({
      title: "Workout logged! 💪",
      description: "Your gym session has been successfully recorded.",
    });

    // Reset form
    setWeightliftingMinutes("");
    setCardioMinutes("");
  };

  return (
    <Card className="bg-gradient-card border-fitness-orange/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Calendar className="h-5 w-5 text-fitness-orange" />
          Log Today's Workout
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weightlifting" className="text-sm font-medium flex items-center gap-1">
                <Dumbbell className="h-4 w-4 text-fitness-orange" />
                Weightlifting (minutes)
              </Label>
              <Input
                id="weightlifting"
                type="number"
                min="0"
                placeholder="0"
                value={weightliftingMinutes}
                onChange={(e) => setWeightliftingMinutes(e.target.value)}
                className="bg-background/50 border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardio" className="text-sm font-medium flex items-center gap-1">
                <Heart className="h-4 w-4 text-fitness-blue" />
                Cardio (minutes)
              </Label>
              <Input
                id="cardio"
                type="number"
                min="0"
                placeholder="0"
                value={cardioMinutes}
                onChange={(e) => setCardioMinutes(e.target.value)}
                className="bg-background/50 border-border/50"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-fitness text-white hover:opacity-90 transition-opacity shadow-glow"
          >
            <Clock className="h-4 w-4 mr-2" />
            Log Workout
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WorkoutForm;