import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import YouTube from "react-youtube";
import { OptionType } from "../types/video";

const onPlayerReady = (event: { target: { pauseVideo: () => void } }): void => {
  event.target.pauseVideo();
};
const opts: OptionType = {
  playerVars: {
    autoplay: 0,
  },
};

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      "Avenir",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "dark",
  },
});

export default function Tips() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <h2 className="inline-block text-2xl font-bold">Tips</h2>
        <h2 className="mb-4 ml-2 inline-block text-xl italic text-primary-500">
          Material UI
        </h2>
        <div className="youtubeContainer relative mb-12 h-0 w-3/4 overflow-hidden pb-[56.25%]">
          <YouTube
            videoId={"x4blD9VKRBY"}
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="text-lg font-bold text-primary-400">
              Consistency
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>High racket with 2 hands at net</li>
                <li>Low and a bit crouched in the back</li>
                <li>Active feet</li>
                <li>Play with a plan</li>
                <li>
                  <strong>Split step when oppenent hits the ball</strong>
                </li>
                <li>Keep 2 feet on the ground before, during and after hit</li>
                <li>Warmup: Look at contact point</li>
                <li>
                  <strong>Prepare racket first thing, stay frozen</strong>
                </li>
                <li>Play the ball where it comes from</li>
                <li>Mirror the angle</li>
                <li>
                  <strong>Volley cross court</strong>
                </li>
                <li>Soft and in the center</li>
                <li>
                  <strong>Avoid testosterone shots</strong>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Bandeja
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Smash</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}
