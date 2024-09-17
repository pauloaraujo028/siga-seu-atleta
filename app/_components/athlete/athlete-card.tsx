import { AthleteWithSport } from "@/app/_lib/athletes";
import {
  extractInstagramAccount,
  formatFollowersCount,
} from "@/app/_lib/utils";
import { Instagram, UserRound } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface AthleteCardProps {
  athlete: AthleteWithSport;
}

const AthleteCard = ({ athlete }: AthleteCardProps) => {
  return (
    <Card className="w-full group">
      <CardHeader className="flex items-start justify-between p-4 flex-row overflow-hidden gap-2">
        <div className="flex items-center space-x-4 truncate">
          <Avatar className="w-14 h-14 border-2 border-black">
            <AvatarImage
              src={athlete.instagramImageUrl!}
              alt="Athlete avatar"
            />
          </Avatar>
          <div className="truncate">
            <CardTitle className="text-lg font-bold truncate">
              {athlete.instagramName}
            </CardTitle>
            <CardDescription className="text-sm truncate">
              {athlete.sport.name}
            </CardDescription>
          </div>
        </div>
        <div className="font-medium flex items-center gap-1">
          <UserRound className="w-5 h-5" />
          {formatFollowersCount(athlete.instagramFollowersCount!)}
        </div>
      </CardHeader>
      <CardContent className="p-4 text-sm text-gray-700 font-light flex-grow">
        <p className="min-h-[7.5em] leading-[1.5em]">{athlete.instagramBio}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t p-4 text-sm">
        <span className="font-bold truncate w-[40%]">
          @{extractInstagramAccount(athlete.instagramUrl!)}
        </span>
        <Link
          href={athlete.instagramUrl!}
          className="flex items-center space-x-1 text-blue-500"
          prefetch={false}
          target="_blank"
        >
          <Instagram className="w-4 h-4" />
          <span>Ver no Instagram</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AthleteCard;
