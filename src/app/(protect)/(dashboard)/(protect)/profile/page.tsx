import { MyUserProfile } from "@/modules/profile";
import { Grid } from "@chakra-ui/react";
import { MyUserPostPanel } from "@/modules/userPost";
import { MyProfileContent } from "@/modules/userProfileContent";

export default function Profile() {
  return (
    <Grid rowGap={10}>
      <MyUserProfile />
      <MyUserPostPanel />
      <MyProfileContent />
    </Grid>
  );
}
