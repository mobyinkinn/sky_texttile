"use client";

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavbarAdminHorizontal from "../navbarAdmin/NavbarAdminHorizontal";
import NavbarAdmin from "../navbarAdmin/NavbarAdminVerticle";
import {
  Container,
  InnerContainer,
  InnerContainerHeadSection,
} from "@/app/styledComponents/admin/Container";
import {
  InnerContainerHead,
  MainHead,
} from "@/app/styledComponents/admin/AdminHead";
import {
  GrayButtonSmall,
  GreenButtonSmall,
  RedButtonSmall,
  StatusLabel,
  StyledButton,
  YellowButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import { SearchInput } from "@/app/styledComponents/admin/Inputs";

import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/VisibilityOff";
import UnblockIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Createcareers from "./parts/Createcareers";
import EditCareers from "./parts/EditCareers";

export default function Careers() {
  const [viewForm, setViewForm] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const UserData = localStorage.getItem("UserData");
  const newUpdate = JSON.parse(UserData);
  const token = newUpdate?.data?.accessToken;
  // Fetch departments data from API
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/careers/get-careers"
      );
      if (response.status === 200) {
        setDepartments(response.data.message);
      } else {
        alert("Failed to fetch departments data.");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  // Handle block/unblock blog
  const handleToggleBlock = async (id, isBlocked) => {
    try {
      const endpoint = isBlocked
        ? `http://localhost:8000/api/v1/careers/unblock-career/${id}`
        : `http://localhost:8000/api/v1/careers/block-career/${id}`;

      const response = await axios.put(endpoint);

      if (response.data.statusCode === 200) {
        // alert(`Blog ${isBlocked ? "unblocked" : "blocked"} successfully!`);
        fetchDepartments();
      } else {
        alert("Failed to update the Career status.");
      }
    } catch (error) {
      console.error("Error updating blog status:", error);
      alert("An error occurred. Please check the console for details.");
    }
  };
  const handleDeleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/careers/deleteById?id=${id}`
      );

      if (response.data.statusCode === 200) {
        alert("Career deleted successfully!");
        fetchDepartments();
      } else {
        alert("Failed to delete the Career.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(
        "An error occurred while deleting the blog. Please check the console for details."
      );
    }
  };

  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setEditModalOpen(true);
  };
  // Handle input changes
  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", editData.title);
    formData.append("content", editData.content);
    formData.append("slug", editData.slug);
    if (editData.image) {
      formData.append("image", editData.image);
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/blog/updateById`,
        formData
      );

      if (response.data.statusCode === 200) {
        alert("Career updated successfully!");
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        alert("Failed to update the Career.");
      }
    } catch (error) {
      console.error("Error updating Career:", error);
      alert("An error occurred while updating the Career.");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <Stack>
      <NavbarAdminHorizontal />
      <Stack direction={"row"}>
        <NavbarAdmin />
        <Stack width={"100%"} position={"relative"}>
          {token ? (
            <Container>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <MainHead>Careers</MainHead>
                <StyledButton onClick={() => setViewForm(true)}>
                  Add Careers
                </StyledButton>
              </Stack>
              {viewForm && (
                <Createcareers
                  setViewForm={setViewForm}
                  fetchDepartments={fetchDepartments}
                />
              )}
              <InnerContainer>
                {/* <InnerContainerHead>Listing</InnerContainerHead>
              <InnerContainerHeadSection>
                <SearchInput placeholder="Search" />
                <GreenButtonSmall>Go!</GreenButtonSmall>
                <GrayButtonSmall>Reset</GrayButtonSmall>
              </InnerContainerHeadSection> */}
                <TableContainer>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="large"
                    aria-label="Departments"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>type</TableCell>
                        <TableCell>location</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={6} align="center">
                            Loading...
                          </TableCell>
                        </TableRow>
                      ) : (
                        departments.map((department, index) => (
                          <TableRow
                            key={department._id}
                            sx={{
                              backgroundColor: "white",
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{department.title}</TableCell>
                            <TableCell>{department.type}</TableCell>
                            <TableCell>{department.location}</TableCell>
                            <TableCell>
                              <StatusLabel
                                status={
                                  department.isBlocked ? "Blocked" : "Active"
                                }
                              >
                                {department.isBlocked ? "Blocked" : "Active"}
                              </StatusLabel>
                            </TableCell>
                            <TableCell>
                              <Stack direction={"row"} gap={"8px"}>
                                <GreenButtonSmall
                                  onClick={() =>
                                    handleToggleBlock(
                                      department._id,
                                      department.isBlocked
                                    )
                                  }
                                >
                                  {department.isBlocked ? (
                                    <BlockIcon
                                      sx={{
                                        width: "15px",
                                        height: "15px",
                                        color: "red",
                                      }}
                                    />
                                  ) : (
                                    <UnblockIcon
                                      sx={{
                                        width: "15px",
                                        height: "15px",
                                        color: "green",
                                      }}
                                    />
                                  )}
                                </GreenButtonSmall>
                                <YellowButtonSmall
                                  onClick={() => handleEditClick(department)}
                                >
                                  <EditIcon
                                    sx={{ width: "15px", height: "15px" }}
                                  />
                                </YellowButtonSmall>
                                <RedButtonSmall
                                  onClick={() =>
                                    handleDeleteBlog(department._id)
                                  }
                                >
                                  <DeleteIcon
                                    sx={{ width: "15px", height: "15px" }}
                                  />
                                </RedButtonSmall>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </InnerContainer>
              {editModalOpen && currentBlog && (
                <EditCareers
                  setEditModalOpen={setEditModalOpen}
                  fetchDepartments={fetchDepartments}
                  blog={currentBlog}
                />
              )}
            </Container>
          ) : (
            "You need to login first Invalid Login"
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}