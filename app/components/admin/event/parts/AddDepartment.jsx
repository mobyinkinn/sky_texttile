// "use client";

// import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
// import {
//   BlueButtonSmall,
//   GreenButtonSmall,
// } from "@/app/styledComponents/admin/Buttons";
// import {
//   InnerContainer,
//   InnerContainerHeadSection,
//   ModalContainer,
// } from "@/app/styledComponents/admin/Container";
// import {
//   InputSection,
//   Label,
//   TextInput,
// } from "@/app/styledComponents/admin/Inputs";
// import { Box, Stack } from "@mui/material";
// import JoditEditor from "jodit-react";
// import { placeholder } from "jodit/esm/plugins/placeholder/placeholder";
// import { useMemo, useRef, useState } from "react";
// import axios from "axios";

// export default function AddDepartment({ setViewForm, fetchDepartments }) {
//   const editor = useRef(null);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [slug, setSlug] = useState("");
//   const [image, setImage] = useState(null);

//   // JoditEditor configuration
//   const config = useMemo(
//     () => ({
//       readonly: false,
//       placeholder: "Start typing...",
//       language: "en",
//     }),
//     []
//   );

//   // Handle image file change
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   // API call to save the form data
//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("content", content);
//       formData.append("slug", slug);
//       formData.append("image", image);

//       const response = await axios.post(
//         "https://skybackend.pmcommu.in/api/v1/event/create",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.statusCode === 200) {
//         alert("Event added successfully!");
//         setViewForm(false);
//         fetchDepartments();
//       } else {
//         alert("Failed to add Event. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error adding department:", error);
//       alert("An error occurred. Please check the console for details.");
//     }
//   };

//   return (
//     <ModalContainer>
//       <InnerContainer width={"80%"}>
//         <InnerContainerHead>Add Department</InnerContainerHead>
//         <InnerContainerHeadSection column>
//           {/* Title Input */}
//           <Stack direction={"row"}>
//             <InputSection width={"50%"}>
//               <Label width={"100px"}>Title</Label>
//               <TextInput
//                 placeholder="Enter Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </InputSection>

//             {/* Slug Input */}
//             <InputSection width={"50%"}>
//               <Label width={"100px"}>Slug</Label>
//               <TextInput
//                 placeholder="Enter Slug"
//                 value={slug}
//                 onChange={(e) => setSlug(e.target.value)}
//               />
//             </InputSection>
//           </Stack>
//           {/* Image Upload */}
//           <InputSection>
//             <Label width={"100px"}>Image</Label>
//             <TextInput type="file" onChange={handleImageChange} />
//           </InputSection>

//           {/* Content Editor */}
//           <InputSection>
//             <Label width={"100px"}>Content</Label>
//             <JoditEditor
//               ref={editor}
//               value={content}
//               config={config}
//               tabIndex={1}
//               onBlur={(newContent) => setContent(newContent)}
//             />
//           </InputSection>

//           {/* Action Buttons */}
//           <InputSection>
//             <Label></Label>
//             <Stack direction={"row"} gap={"10px"}>
//               <GreenButtonSmall onClick={handleSubmit}>Save</GreenButtonSmall>
//               <BlueButtonSmall onClick={() => setViewForm(false)}>
//                 Cancel
//               </BlueButtonSmall>
//             </Stack>
//           </InputSection>
//         </InnerContainerHeadSection>
//       </InnerContainer>
//     </ModalContainer>
//   );
// }


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
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import axios from "axios";

const Jodit = dynamic(() => import("./Jodit"), { ssr: false });

export default function AddDepartment({ setViewForm, fetchDepartments }) {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);


  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // API call to save the form data
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("slug", slug);
      formData.append("image", image);

      const response = await axios.post(
        "https://skybackend.pmcommu.in/api/v1/event/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.statusCode === 200) {
        alert("Event added successfully!");
        setViewForm(false);
        fetchDepartments();
      } else {
        alert("Failed to add Event. Please try again.");
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
              <Label width={"100px"}>Slug</Label>
              <TextInput
                placeholder="Enter Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </InputSection>
          </Stack>
          {/* Image Upload */}
          <InputSection>
            <Label width={"100px"}>Image</Label>
            <TextInput type="file" onChange={handleImageChange} />
          </InputSection>

          {/* Content Editor */}
          <InputSection>
            <Label width={"100px"}>Content</Label>
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

