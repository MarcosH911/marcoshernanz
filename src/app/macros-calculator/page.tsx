"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

function Page() {
  const [measurementSystem, setMeasurementSystem] = useState<
    "metric" | "imperial"
  >("metric");
  const [gender, setGender] = useState<null | "male" | "female">(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [knowsBodyFat, setKnowsBodyFat] = useState(false);
  const [bodyFat, setBodyFat] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let metricWeight = Number(weight);
    let metricHeight = Number(height);

    if (measurementSystem === "imperial") {
      metricWeight = Number(weight) * 0.453592;
      metricHeight =
        Number(height.split("-")[0]) * 30.48 +
        Number(height.split("-")[1]) * 2.54;
    }

    let bmr;

    if (knowsBodyFat && Number(bodyFat) <= 25) {
      bmr = 370 + 21.6 * (1 - Number(bodyFat) / 100) * metricWeight;
    } else if (gender === "male") {
      bmr = 10 * metricWeight + 6.25 * metricHeight - 5 * Number(age) + 5;
    } else {
      bmr = 10 * metricWeight + 6.25 * metricHeight - 5 * Number(age) - 161;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Macros Calculator</h1>
      <div>
        <Label>System</Label>
        <Button onClick={() => setMeasurementSystem("metric")}>Metric</Button>
        <Button onClick={() => setMeasurementSystem("imperial")}>
          Imperial
        </Button>
      </div>

      <div>
        <Label>Gender</Label>
        <Button onClick={() => setGender("male")}>Male</Button>
        <Button onClick={() => setGender("female")}>Female</Button>
      </div>

      <div>
        <Label>Weight</Label>
        <Input value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div>
        <Label htmlFor="knowsBodyFat">Do you know your body fat %?</Label>
        <Switch
          id="knowsBodyFat"
          checked={knowsBodyFat}
          onCheckedChange={setKnowsBodyFat}
        />
      </div>

      <div>
        <Label>Body fat %</Label>
        <Input
          value={bodyFat}
          onChange={(e) => setBodyFat(e.target.value)}
          disabled={!knowsBodyFat}
        />
      </div>

      <div>
        <Label>Height</Label>
        <Input value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <div>
        <Label>Age</Label>
        <Input value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
    </form>
  );
}

export default Page;
