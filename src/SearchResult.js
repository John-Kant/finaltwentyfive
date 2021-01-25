import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import {FaBus} from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function SearchResult(props) {
  const [change, setChange] = React.useState(false);
  const classes = useStyles();

  const handdleChange = () => {
    setChange(!change);
  };
    const data = props.line;
    console.log(data);

  return (
  
    <div className=" container-fluid timeline_section ">
   {props.line?props.line.map((item,index)=>(<strong><div key={index} className="btn btn-outline-danger">{item.map((item,index)=><span key={index} className="mb-4" style={{color:"#362023"}}><FaBus/>P {item}</span>)}<span className="pl-1 mt-1"> </span></div></strong>)):<div>No Line Disponible</div>}
      <Timeline align="alternate"className="Home" >
      {/*{props.datas.map((item)=>item.map((item)=>item.destination.map((item,index)=>(*/}
      {props.datas.map((item,index)=>item.map((item)=>(

        <TimelineItem>

          <TimelineSeparator>
          <TimelineDot key={index} color="primary" />
        
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{item}</TimelineContent>
           


      </TimelineItem>
        ))
      )}
      </Timeline>
     
    </div>
   
  );
}
export default SearchResult;

