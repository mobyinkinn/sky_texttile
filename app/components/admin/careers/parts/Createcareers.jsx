"use client";

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
import { placeholder } from "jodit/esm/plugins/placeholder/placeholder";
import { useMemo, useRef, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const Jodit = dynamic(() => import("./Jodit"), { ssr: false });

export default function Createcareers({ setViewForm, fetchDepartments }) {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  // JoditEditor configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      language: "en",
    }),
    []
  );

  // API call to save the form data
  const handleSubmit = async () => {
    try {
      const formData = {
        title,
        description,
        type,
        location,
      };

      const response = await axios.post(
        "https://skybackend.pmcommu.in/api/v1/careers/create-careers",
        formData,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
          },
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
        <InnerContainerHead>Add Career</InnerContainerHead>
        <InnerContainerHeadSection column>
          {/* Title Input */}
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Title</Label>
              <TextInput
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputSection>

            {/* Slug Input */}
            <InputSection width={"50%"}>
              <Label width={"100px"}>Type</Label>
              <TextInput
                placeholder="Enter Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </InputSection>
          </Stack>
          <InputSection width={"50%"}>
            <Label width={"100px"}>Location</Label>
            <TextInput
              placeholder="Enter Type"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </InputSection>

          {/* Content Editor */}
          <InputSection>
            <Label width={"100px"}>Description</Label>
            <Jodit content={content} setContent={setContent} />
          </InputSection>

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
