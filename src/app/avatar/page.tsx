import { Avatar } from "@/components/avatar";

export default function AvatarComponent() {
  return (
    <div className="p-6 flex flex-col gap-18 bg-orange-50 h-screen">
      <div className="flex flex-row justify-center">
        <p className="font-mono font-bold text-xl">Avatar Component</p>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Basic Avatars</p>
          <div className="flex flex-row justify-evenly">
            <Avatar
              url="https://images.unsplash.com/photo-1613145997970-db84a7975fbb"
              type="image"
            />
            <Avatar type="alpha" label="SK" />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Color Avatars</p>
          <div className="flex flex-row justify-evenly">
            <Avatar type="alpha" label="SK" color="green" />
            <Avatar type="alpha" label="SK" color="red" />
            <Avatar type="alpha" label="SK" color="sky" />
          </div>
        </div>
      </div>

      <div className="border-1 rounded-md p-4 bg-white shadow-xl">
        <div className="flex flex-col gap-8 w-full">
          <p className="font-mono text-lg font-bold">Avatar sizes</p>
          <div className="flex flex-row justify-evenly">
            <Avatar
              url="https://images.unsplash.com/photo-1613145997970-db84a7975fbb"
              type="image"
              size="sm"
            />
            <Avatar
              url="https://images.unsplash.com/photo-1613145997970-db84a7975fbb"
              type="image"
            />
            <Avatar
              url="https://images.unsplash.com/photo-1613145997970-db84a7975fbb"
              type="image"
              size="lg"
            />
            <Avatar type="alpha" label="SK" size="sm" />
            <Avatar type="alpha" label="SK" />
            <Avatar type="alpha" label="SK" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
