"use client";
import { Avatar } from "@/components/avatar";
import { CodeBlock } from "@/components/codeBlock";
import { ComponentLayout } from "@/components/componentLayout";
import {
  basicAvatarCode,
  colorAvatarCode,
  sizeAvatarCode,
} from "@/rawCode/avatar";
import { useState } from "react";

export default function AvatarComponent() {
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showColoredCode, setShowColoredCode] = useState(false);
  const [showSizeCode, setShowSizeCode] = useState(false);
  return (
    <ComponentLayout componentType="Avatar">
      <div>
        <p className="font-mono text-lg font-bold">Basic Avatars</p>
        <div className="flex flex-row justify-evenly">
          <Avatar
            url="https://images.unsplash.com/photo-1613145997970-db84a7975fbb"
            type="image"
          />
          <Avatar type="alpha" label="SK" />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowBasicCode(!showBasicCode)}
          >
            Show code
          </button>
        </div>
        {showBasicCode && (
          <div>
            <CodeBlock code={basicAvatarCode} />
          </div>
        )}
      </div>

      <div>
        <p className="font-mono text-lg font-bold">Color Avatars</p>
        <div className="flex flex-row justify-evenly">
          <Avatar type="alpha" label="SK" color="green" />
          <Avatar type="alpha" label="SK" color="red" />
          <Avatar type="alpha" label="SK" color="sky" />
        </div>
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowColoredCode(!showColoredCode)}
          >
            Show code
          </button>
        </div>
        {showColoredCode && (
          <div>
            <CodeBlock code={colorAvatarCode} />
          </div>
        )}
      </div>

      <div>
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
        <div className="pt-8">
          <button
            className="font-mono border-1 h-8 px-6 cursor-pointer rounded-md text-sky-500"
            onClick={() => setShowSizeCode(!showSizeCode)}
          >
            Show code
          </button>
        </div>
        {showSizeCode && (
          <div>
            <CodeBlock code={sizeAvatarCode} />
          </div>
        )}
      </div>
    </ComponentLayout>
  );
}
