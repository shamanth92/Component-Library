import { Switch } from "@/components/switch";

export default function SwitchComponent() {
  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Switch Component</p>
      </div>
      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Switch</p>
          <div className="flex flex-row justify-evenly">
            <Switch></Switch>
            <Switch disabled={true}></Switch>
            <Switch disabled={true} enabledSwitch={true}></Switch>
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Switch</p>
          <div className="flex flex-row justify-evenly">
            <Switch color="red" enabledSwitch={true}></Switch>
            <Switch color="green" enabledSwitch={true}></Switch>
            <Switch color="yellow" enabledSwitch={true}></Switch>
            <Switch color="orange" enabledSwitch={true}></Switch>
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Switch</p>
          <div className="flex flex-row justify-evenly">
            <Switch color="red"></Switch>
            <Switch size="sm"></Switch>
            <Switch size="lg"></Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
