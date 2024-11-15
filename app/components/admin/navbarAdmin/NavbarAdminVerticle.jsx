import { Stack, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  NavTableCell,
  NavTableRow,
} from "@/app/styledComponents/admin/NavTable";
import { useRouter } from "next/navigation";

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
    icon: ManageAccountsIcon,
  },
  {
    id: 2,
    name: "Seo Meta tags",
    link: "/admin/seo-changes",
    icon: ManageAccountsIcon,
  },
  {
    id: 3,
    name: "Careers",
    link: "/admin/careers",
    icon: ManageAccountsIcon,
  },
  {
    id: 4,
    name: "Opening Data",
    link: "/admin/data",
    icon: ManageAccountsIcon,
  },
  {
    id: 5,
    name: "Contact Details",

    link: "/admin/contact-data",
    icon: ManageAccountsIcon,
  },
  
];

export default function NavbarAdmin() {
  const router = useRouter();
  return (
    <Stack backgroundColor={"#fff"} height={"90vh"} width={"300px"}>
      <Stack backgroundColor={"#89CC97"} alignItems={"center"}>
        <Typography
          sx={{
            backgroundColor: "#61aa70",
            width: "fit-content",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
            color: "white",
            "&:hover": {
              backgroundColor: "#53B567",
            },
          }}
        >
          Quick Links
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
                  <NavTableCell icon>
                    <el.icon width={"50px"} height={"50px"} />
                  </NavTableCell>
                  <NavTableCell>{el.name}</NavTableCell>
                </NavTableRow>
              );
            })}
          </tbody>
        </table>
      </Stack>
    </Stack>
  );
}
