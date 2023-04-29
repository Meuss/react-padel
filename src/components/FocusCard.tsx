import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface FocusProps {
  data: {
    title: string;
    content: string[];
  };
}
export default function FocusCard(props: FocusProps) {
  const isConsistency = props.data.title === "Consistency";
  return (
    <div className={isConsistency ? "lg:col-span-2 xl:col-span-3" : ""}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="mb-4 text-2xl">{props.data.title}</div>
            <ul className="text-lg">
              {props.data.content.map((c, i) => (
                <li key={i} className="mb-2">
                  {c}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
