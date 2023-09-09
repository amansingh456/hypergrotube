declare module "react-loader-spinner" {
   type Loader = React.Component<{
     color?: string;
     width?: number;
     height?: number;
     type:
       | "Audio"
       | "Ball-Triangle"
       | "Bars"
       | "Circles"
       | "Grid"
       | "Hearts"
       | "Oval"
       | "Puff"
       | "Rings"
       | "TailSpin"
       | "ThreeDots"
       | "InfintySpin";
   }>;
 
   export default function(props): Loader;
 }