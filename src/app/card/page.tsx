import { Card } from "@/components/card";

export default function CardComponent() {
  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Card Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Card</p>
          <div className="flex flex-row justify-evenly">
            <Card
              title="Cricket"
              imageUrl="https://images.unsplash.com/photo-1642888621409-df3812ab67c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              actionLabels={["Like", "Comment"]}
            />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Customized Card</p>
          <div className="flex flex-row justify-evenly">
            <Card
              title="Cricket"
              imageUrl="https://images.unsplash.com/photo-1642888621409-df3812ab67c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              //   actionLabels={["Like", "Comment"]}
            />
            <Card
              title="Cricket"
              imageUrl="https://images.unsplash.com/photo-1642888621409-df3812ab67c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              actionLabels={["Like", "Comment"]}
              color="green"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
