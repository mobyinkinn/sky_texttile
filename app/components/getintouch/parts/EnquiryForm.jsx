import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import left from "./assets/left.svg";
import right from "./assets/right.svg";

export default function Form() {
  return (
    <Stack
      margin={{
        xll: "70px",
        xl: "60px",
        lg: "60px",
        md: "50px",
        smm: "45px",
        sm: "30px",
      }}
      gap={"10px"}
      sx={{
        position: "relative",
      }}
    >
      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          backgroundImage: `url(${left.src})`,
          backgroundSize: "contain",
          width: { lg: "200px", md: "150px" },
          height: { lg: "200px", md: "150px" },
          right: "0",
          bottom: "0",
        }}
      ></Box>
      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          backgroundImage: `url(${right.src})`,
          backgroundSize: "contain",
          width: { lg: "200px", md: "150px" },
          height: { lg: "200px", md: "150px" },
          left: "0",
          bottom: "0",
        }}
      ></Box>
      <Typography
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        Contact us
      </Typography>
      <Typography
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        View Upcoming And Past Events Hosted By Sky Textiles
      </Typography>

      <Stack
        width={{ xll: "60vw", smm: "60vw", sm: "none" }}
        gap={"10px"}
        alignItems={"center"}
        margin={{ xll: "30px auto", smm: "30px auto", sm: "0px" }}
      >
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          sx={{
            width: "100%",
          }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
        >
          <TextField
            variant="outlined"
            label="First name"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Last name"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Email address"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Phone"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Company name"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Category"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <TextField
          multiline
          rows={4}
          maxRows={4}
          label="Message"
          sx={{
            width: "100%",
          }}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "200px", margin: "auto", backgroundColor: "#FB5457" }}
      >
        Send Request
      </Button>
    </Stack>
  );
}
