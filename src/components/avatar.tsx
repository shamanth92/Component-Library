type AvatarProps = {
  url?: string;
  type: "image" | "alpha";
  label?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
};

export const Avatar = ({
  url,
  type = "image",
  label,
  color = "gray",
  size = "md",
}: AvatarProps) => {
  let avatarSize = "w-12 h-12";
  avatarSize =
    size === "lg" ? "w-18 h-18" : size === "sm" ? "w-8 h-8" : "w-12 h-12";

  return (
    <div>
      {type === "image" ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={url}
          alt="Description"
          className={`${avatarSize} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${avatarSize} rounded-full object-cover bg-${color}-500 flex justify-center items-center`}
        >
          <label className="font-mono text-lg text-white">{label}</label>
        </div>
      )}
    </div>
  );
};
