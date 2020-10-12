import { Request, Response } from "express";
import { ViewNameLookup, RouteLookup, QueryParameterLookup } from "./lookups/routingLookup";
import { Resources, ResourceKey } from "../resourceLookup";
import { CommandResponse, Product, ProductListingPageResponse, ActiveUser, MainMenuPageResponse, PageResponse } from "./typeDefinitions";
import * as ValidateActiveUser from "./commands/activeUsers/validateActiveUserCommand";


export const start = async (req: Request, res: Response): Promise<void> => {
    return ValidateActiveUser.execute((<Express.Session>req.session).id)
		.then((activeUserCommandResponse: CommandResponse<ActiveUser>): void => {
			res.setHeader(
				"Cache-Control",
                "no-cache, max-age=0, must-revalidate, no-store");
                var isElevatedUser = false;
                if(((<ActiveUser>activeUserCommandResponse.data).classification) == 2){
                    isElevatedUser = true;
                }
                if(((<ActiveUser>activeUserCommandResponse.data).classification) == 3){
                    isElevatedUser = true;
                }


			return res.render(
				RouteLookup.MainMenu,
				<MainMenuPageResponse>{
                    isElevatedUser: isElevatedUser,
                    errorMessage: Resources.getString(req.query[QueryParameterLookup.ErrorCode])
				});
		}).catch((error: any): void => {
			return res.render(
                RouteLookup.SignIn,
                <PageResponse>{errorMessage: error.message}
            );
		});
};
