import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import PlaceHolderCircle from "../../PlaceHolderCircle";
import LogoutIcon from "./icons/logout.svg";
import { truncateText } from "~/utils";
import defaultAvatar from "~/assets/default-avatar.svg";

interface UserInfoProps {
  imageUrl?: string;
  role: string;
  name: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ imageUrl, role, name, email }) => {
  const { logout } = useAuth0();
  const onAccountInfoClick = () => {};

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-center">
          <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${name}'s Avatar`}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = defaultAvatar;
                }}
              />
            ) : (
              <PlaceHolderCircle size={48} />
            )}
          </div>

          <div className="">
            <div className="text-sm text-gray-500">{role}</div>
            <div className="text-base font-semibold text-gray-800 truncate">
              {truncateText(name, 14)}
            </div>
          </div>
        </div>
        <button className="" onClick={() => logout()}>
          <img src={LogoutIcon} alt="Logout" />
        </button>
      </div>

      <div className="flex items-center mt-3 space-x-2">
        <button
          onClick={onAccountInfoClick}
          className="px-3 py-1 text-sm font-semibold bg-yellow-900 rounded-sm whitespace-nowrap hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Account Info
        </button>
        <div className="min-w-0 text-sm text-gray-600 truncate overflow-ellipsis">
          {truncateText(email, 14)}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
