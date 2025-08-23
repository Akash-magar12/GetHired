import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-0">
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-12">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-1.5 sm:-space-x-2 *:data-[slot=avatar]:ring-1 sm:*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]">
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar1.png" alt="@shadcn" />
            <AvatarFallback className="text-xs sm:text-sm">CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar3.png" alt="@leerob" />
            <AvatarFallback className="text-xs sm:text-sm">LR</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar2.png" />
            <AvatarFallback className="text-xs sm:text-sm">ER</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar4.png" alt="@shadcn" />
            <AvatarFallback className="text-xs sm:text-sm">CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar5.png" alt="@leerob" />
            <AvatarFallback className="text-xs sm:text-sm">LR</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar6.png" alt="@evilrabbit" />
            <AvatarFallback className="text-xs sm:text-sm">ER</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <p className="text-sm sm:text-base text-center">
        Trusted by <span className="font-bold">100,000+ people</span>
      </p>
    </div>
  );
};

export default AvatarGroup;
