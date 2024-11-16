import { Stack, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {
  NavTableCell,
  NavTableRow,
} from "@/app/styledComponents/admin/NavTable";
import { usePathname, useRouter } from "next/navigation";

const navData = [
  {
    id: 0,
    name: "Blogs",
    link: "/admin/blog",
    icon: ManageAccountsIcon,
  },
  {
    id: 1,
    name: "Events",
    link: "/admin/event",
    icon: FormatListBulletedIcon,
  },
  {
    id: 2,
    name: "Seo Meta tags",
    link: "/admin/seo",
    icon: ShowChartIcon,
  },
  {
    id: 3,
    name: "Careers",
    link: "/admin/careers",
    icon: GroupAddIcon,
  },
  {
    id: 4,
    name: "Hiring Data",
    link: "/admin/hiring-data",
    icon: PictureAsPdfIcon,
  },
  {
    id: 5,
    name: "Contact Details",
    link: "/admin/contact-data",
    icon: ContactsIcon,
  },
];

export default function NavbarAdmin() {
  const path = usePathname();
  const router = useRouter();

  return (
    <Stack backgroundColor={"#fff"} height={"90vh"} width={"300px"}>
      <Stack backgroundColor={"#89CC97"} alignItems={"center"}>
        <Typography
          sx={{
            // backgroundColor: "#61aa70",
            width: "fit-content",
            padding: "5px 10px",
            borderRadius: "5px",
            // cursor: "pointer",
            margin: "10px",
            color: "white",
            // "&:hover": {
            //   backgroundColor: "#53B567",
            // },
          }}
        >
          Admin Panel
        </Typography>
      </Stack>
      <Stack
        sx={{
          overflow: "auto",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            {navData.map((el, i) => {
              return (
                <NavTableRow key={el.id} onClick={() => router.push(el.link)}>
                  <NavTableCell icon bgColor={path === el.link && "#eee"}>
                    <el.icon width={"50px"} height={"50px"} />
                  </NavTableCell>
                  <NavTableCell bgColor={path === el.link && "#eee"}>
                    {el.name}
                  </NavTableCell>
                </NavTableRow>
              );
            })}
          </tbody>
        </table>
      </Stack>
    </Stack>
  );
}
