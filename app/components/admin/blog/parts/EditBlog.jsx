

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
// import { Stack } from "@mui/material";
// import JoditEditor from "jodit-react";
// import { useMemo, useRef, useState } from "react";
// import axios from "axios";

// export default function EditBlog({ setEditModalOpen, fetchDepartments, blog }) {
//   console.log("blog",blog)
//   const editor = useRef(null);
//   const [title, setTitle] = useState(blog?.title || "");
//   const [content, setContent] = useState(blog?.content || "");
//   const [slug, setSlug] = useState(blog?.slug || "");
//   const [image, setImage] = useState(blog?.image || null);
//   const [previewImage, setPreviewImage] = useState(blog?.image || null);

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
//     const file = e.target.files[0];
//     setImage(file);

//     // Create a preview URL for the selected image
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPreviewImage(imageUrl);
//     }
//   };

//   // API call to update the blog data
// const handleUpdateBlog = async () => {
//   const formData = new FormData();
//   formData.append("title", title || "");
//   formData.append("content", content || "");
//   formData.append("slug", slug || "");
//   if (image) {
//     formData.append("image", image);
//   }
// console.log("forma", formData);
//   try {
//     const response = await axios.put(
//       `http://localhost:8000/api/v1/blog/update/${blog._id}`,
//       formData,
      
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
// console.log("response", response);
//     if (response.status === 200) {
//       alert("Blog updated successfully!");
//       fetchDepartments();
//       setEditModalOpen(false);
//     } else {
//       alert("Failed to update the blog.");
//     }
//   } catch (error) {
//     console.error("Error updating blog:", error);
//     alert("An error occurred while updating the blog.");
//   }
// };

//   return (
//     <ModalContainer>
//       <InnerContainer width={"80%"}>
//         <InnerContainerHead>Edit Blog</InnerContainerHead>
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

//           {/* Image Upload and Preview */}
//           <InputSection>
//             <Label width={"100px"}>Image</Label>
//             <TextInput type="file" onChange={handleImageChange} />
//           </InputSection>
//           {previewImage && (
//             <img
//               src={previewImage}
//               alt="Preview"
//               style={{ width: "100px", height: "100px", marginTop: "10px" }}
//             />
//           )}

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
//               <GreenButtonSmall onClick={handleUpdateBlog}>
//                 Update
//               </GreenButtonSmall>
//               <BlueButtonSmall onClick={() => setEditModalOpen(false)}>
//                 Cancel
//               </BlueButtonSmall>
//             </Stack>
//           </InputSection>
//         </InnerContainerHeadSection>
//       </InnerContainer>
//     </ModalContainer>
//   );
// }



import { useMemo, useRef, useState } from "react";
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
import { Stack } from "@mui/material";
import JoditEditor from "jodit-react";
import axios from "axios";

export default function EditBlog({ setEditModalOpen, fetchDepartments, blog }) {
  const editor = useRef(null);
  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [slug, setSlug] = useState(blog?.slug || "");
  const [image, setImage] = useState(blog?.image || null);
  const [previewImage, setPreviewImage] = useState(blog?.image || null);

  // JoditEditor configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      language: "en",
    }),
    []
  );

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  // API call to update the blog data
  const handleUpdateBlog = async () => {
    const formData = new FormData();
    formData.append("title", title || "");
    formData.append("content", content || "");
    formData.append("slug", slug || "");
    if (image) {
      formData.append("image", image);
    }

    console.log(
      "FormData:",
      formData.get("title"),
      formData.get("content"),
      formData.get("slug")
    );

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/blog/update/${blog._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Blog updated successfully!");
        fetchDepartments();
        setEditModalOpen(false);
      } else {
        alert("Failed to update the blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("An error occurred while updating the blog.");
    }
  };

  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>Edit Blog</InnerContainerHead>
        <InnerContainerHeadSection column>
          <Stack direction={"row"}>
            <InputSection width={"50%"}>
              <Label width={"100px"}>Title</Label>
              <TextInput
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputSection>

            <InputSection width={"50%"}>
              <Label width={"100px"}>Slug</Label>
              <TextInput
                placeholder="Enter Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </InputSection>
          </Stack>

          <InputSection>
            <Label width={"100px"}>Image</Label>
            <TextInput type="file" onChange={handleImageChange} />
          </InputSection>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "100px", height: "100px", marginTop: "10px" }}
            />
          )}

          <InputSection>
            <Label width={"100px"}>Content</Label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              onChange={(newContent) => setContent(newContent)}
            />
          </InputSection>

          <InputSection>
            <Label></Label>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall onClick={handleUpdateBlog}>
                Update
              </GreenButtonSmall>
              <BlueButtonSmall onClick={() => setEditModalOpen(false)}>
                Cancel
              </BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
