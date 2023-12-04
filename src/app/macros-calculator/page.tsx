"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

function Page() {
  const [measureSystem, setMeasureSystem] = useState<"metric" | "imperial">(
    "metric"
  );
  const [gender, setGender] = useState<null | "male" | "female">(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [knowsBodyFat, setKnowsBodyFat] = useState(false);
  const [bodyFat, setBodyFat] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Macros Calculator</h1>
      <div>
        <Button onClick={() => setMeasureSystem("metric")}>Metric</Button>
        <Button onClick={() => setMeasureSystem("imperial")}>Imperial</Button>
      </div>

      <div>
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

      {knowsBodyFat && (
        <div>
          <Label>Body fat %</Label>
          <Input value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
        </div>
      )}

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
