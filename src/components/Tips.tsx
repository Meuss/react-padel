import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Video from "./Video";

export default function Tips() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="w-full">
      <h2 className="inline-block text-2xl font-bold">Tips</h2>
      <h2 className="mb-4 ml-2 inline-block text-xl italic text-primary-500">
        Material UI
      </h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="text-lg font-bold text-primary-400">Consistency</div>
        </AccordionSummary>
        <AccordionDetails>
          <Video videoID={"x4blD9VKRBY"} autoplay={0} />
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
          <div className="text-lg font-bold text-primary-400">Bandeja</div>
        </AccordionSummary>
        <AccordionDetails>
          <Video videoID={"yHAJ5XjFUNg"} autoplay={0} />
          <ul>
            <li>
              <strong>Defensive shot</strong>
            </li>
            <li>Start with racket high</li>
            <li>Turn sideways</li>
            <li>Contact at eye level front to the side</li>
            <li>Follow through</li>
            <li>Regain net position</li>
            <li>Cross court or center</li>
          </ul>
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
          <div className="text-lg font-bold text-primary-400">Vibora</div>
        </AccordionSummary>
        <AccordionDetails>
          <Video videoID={"yHAJ5XjFUNg"} autoplay={0} />
          <ul>
            <li>
              <strong>Around 60-70% max speed</strong>
            </li>
            <li>Start with racket behind head</li>
            <li>
              Hit the ball around 3 <QueryBuilderIcon /> for slice
            </li>
            <li>Brush around ball</li>
            <li>A lot of rotation of upper body</li>
            <li>Not too big a swing</li>
            <li>A lot of wrist action</li>
            <li>Hold racket lower</li>
            <li></li>
          </ul>
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
          <div className="text-lg font-bold text-primary-400">Kick Smash</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Video videoID={"auaK6wzcQnI"} autoplay={0} />
            <ul>
              <li>
                <strong>Change from the continental grip</strong>
              </li>
              <li>Turn shoulders diagonally</li>
              <li>Racket below and behind head</li>
              <li>Brush: Swing left to right + up to down</li>
              <li>
                <strong>Very loose wrist</strong>
              </li>
              <li>Remember the ball throw</li>
              <li>
                <strong>Contact point: between head and right shoulder</strong>
              </li>
              <li>Position: green area</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
