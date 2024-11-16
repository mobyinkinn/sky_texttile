import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "./assets/logo.png";
import { NavText } from "@/app/styledComponents/admin/Text";
import { useRouter } from "next/navigation";

export default function NavbarAdminHorizontal() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("UserData");
    router.push("/admin/login");
  };
  return (
    <Stack
      height={"10vh"}
      backgroundColor={"#25313E"}
      padding={"10px"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image src={logo} width={120} height={40} alt="" />
      <Stack>
        <NavText onClick={handleLogout}>Log Out</NavText>
      </Stack>
    </Stack>
  );
}
