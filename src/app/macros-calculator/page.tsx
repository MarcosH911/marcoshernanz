import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Page() {
  return (
    <div>
      <h1>Macros Calculator</h1>
      <div>
        <Button>Metric</Button>
        <Button>Imperial</Button>
      </div>

      <div>
        <Label>Weight</Label>
        <Input />
      </div>

      <div>
        <Label>Do you know your body fat %?</Label>
      </div>

      <div>
        <Label>Body fat %</Label>
        <Input />
      </div>

      <div>
        <Label>Height</Label>
        <Input />
      </div>

      <div>
        <Label>Age</Label>
        <Input />
      </div>
    </div>
  );
}

export default Page;
