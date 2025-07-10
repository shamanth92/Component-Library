export const basicAvatarCode = `
import { Avatar } from "@/components/avatar";

          <div className="flex flex-row justify-evenly">
            <Avatar
              url="https://images.unsplash.com/photo-1613145997970-db84a7975fbb"
              type="image"
            />
            <Avatar type="alpha" label="SK" />
          </div>
`;

export const colorAvatarCode = `
import { Avatar } from "@/components/avatar";

        <div className="flex flex-row justify-evenly">
          <Avatar type="alpha" label="SK" color="green" />
          <Avatar type="alpha" label="SK" color="red" />
          <Avatar type="alpha" label="SK" color="sky" />
        </div>
`;

export const sizeAvatarCode = `
import { Avatar } from "@/components/avatar";

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
`;
