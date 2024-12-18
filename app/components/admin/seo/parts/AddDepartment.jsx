"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
import {
  BlueButtonSmall,
  GreenButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import {
  InnerContainer,
  InnerContainerHeadSection,
  ModalContainer,
} from "@/app/styledComponents/admin/Container";
import {
  InputSection,
  Label,
  TextInput,
} from "@/app/styledComponents/admin/Inputs";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const pageData = [
  { label: "home" },
  { label: "blog" },
  { label: "clients" },
  { label: "companyProfile" },
  { label: "skyPrimware" },
  { label: "skyInternational" },
  { label: "skyTextiles" },
  { label: "careers" },
  { label: "enquiry" },
  { label: "contactUs" },
  { label: "infrastructure" },
  { label: "products" },
  { label: "fabrics" },
  { label: "yarns" },
  { label: "garments" },
  { label: "sustainability" },
  { label: "certs" },
  { label: "csr" },
  { label: "events" },
  { label: "whyUs" },
];

const initialMetaData = {
  keywords: "",
  description: "",
  title: "",
  pagename: "",
};

export default function AddDepartment({ setViewForm, fetchDepartments }) {
  const [metaData, setMetaData] = useState(initialMetaData);
  console.log(metaData);

  // API call to save the form data
  const handleSubmit = async () => {
    try {
      const formData = metaData;

      const response = await axios.post(
        "https://skybackend.pmcommu.in/api/v1/seo/create-metadata",
        formData,
        {
          headers: {},
        }
      );

      if (response.data.statusCode === 200) {
        alert("Blog added successfully!");
        setViewForm(false);
        fetchDepartments();
      } else {
        alert("Failed to add Blog. Please try again.");
      }
    } catch (error) {
      console.error("Error adding department:", error);
      alert("An error occurred. Please check the console for details.");
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>Add Department</InnerContainerHead>
        <InnerContainerHeadSection column>
          {/* Title Input */}
          <Stack direction={"column"}>
            <InputSection width={"70%"}>
              <Label width={"100px"}>Title</Label>
              <TextInput
                placeholder="Enter Title"
                value={metaData.title}
                onChange={(e) =>
                  setMetaData({ ...metaData, title: e.target.value })
                }
              />
            </InputSection>

            {/* Keywords Input */}
            <InputSection width={"70%"}>
              <Label width={"100px"}>Keywords</Label>
              <TextInput
                placeholder="Enter Keywords"
                value={metaData.keywords}
                onChange={(e) =>
                  setMetaData({ ...metaData, keywords: e.target.value })
                }
              />
            </InputSection>
            <InputSection width={"70%"}>
              <Label width={"100px"}>Description</Label>
              <TextInput
                placeholder="Enter Description"
                value={metaData.description}
                onChange={(e) =>
                  setMetaData({ ...metaData, description: e.target.value })
                }
              />
            </InputSection>
            <InputSection width={"70%"}>
              <Label width={"100px"}>Page</Label>
              <Autocomplete
                disablePortal
                options={pageData}
                sx={{ width: 300 }}
                onChange={(e, newValue) =>
                  setMetaData({ ...metaData, pagename: newValue.label })
                }
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiInputBase-root": {
                        padding: "7px 10px",
                      },
                    }}
                    {...params}
                    label="Type here"
                  />
                )}
              />
            </InputSection>
          </Stack>

          {/* Action Buttons */}
          <InputSection>
            <Label></Label>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall onClick={handleSubmit}>Save</GreenButtonSmall>
              <BlueButtonSmall onClick={() => setViewForm(false)}>
                Cancel
              </BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
