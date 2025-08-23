import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row flex-wrap items-center gap-12">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]">
          <Avatar>
            <AvatarImage src="/avatar1.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar3.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar2.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar4.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar5.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar6.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <p>
        Trusted by <span className="font-bold">100,000+ people</span>
      </p>
    </div>
  );
};

export default AvatarGroup;
