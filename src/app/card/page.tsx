"use client";
import { Card } from "@/components/card";
import { ComponentLayout } from "@/components/componentLayout";

export default function CardComponent() {
  return (
    <ComponentLayout componentType="Card">
      <div>
        <p className="font-mono text-lg font-bold">Basic Card</p>
        <div className="flex flex-row justify-evenly">
          <Card
            title="Cricket"
            imageUrl="https://images.unsplash.com/photo-1642888621409-df3812ab67c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            actionLabels={["Like", "Comment"]}
          />
        </div>
      </div>

      <div>
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
    </ComponentLayout>
  );
}
