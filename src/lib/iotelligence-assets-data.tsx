import { useEffect, useState } from "preact/hooks";
import type { CategorizedMedia } from "../types/types";
import { Bolt, Cctv, ChartNoAxesCombined, ClipboardClock, Fan, RulerDimensionLine, TicketCheck, Users, Weight, Workflow } from "lucide-preact";
import type { ComponentType } from "preact";
import type { LucideProps } from "lucide-preact";

type IconType = ComponentType<LucideProps>;


/* ------------------ utils ------------------ */

function getMediaType(path: string): "image" | "video" | null {
  const imageExt = ["png", "jpg", "jpeg", "webp", "svg", "avif"];
  const videoExt = ["mp4", "webm", "ogg"];

  if (imageExt.some(ext => path.endsWith(`.${ext}`))) return "image";
  if (videoExt.some(ext => path.endsWith(`.${ext}`))) return "video";

  return null;
}
export type ProjectCategory =
  | "Inspection"
  | "Measurement"
  | "Validation"
  | "Quality Control"
  | "Automation"
  | "All";
type IotelligenceProject = {
  features: string[];
  title: string;
  category: string;
  description: string;
  media: {
    images: string[];
    videos: string[];
  };
  icon?: IconType;
  imageHint: string;
};


function getCategory(path: string): string | null {
  const parts = path.split("/");
  const iotIndex = parts.indexOf("iotelligence");

  if (iotIndex === -1 || !parts[iotIndex + 1]) return null;
  return parts[iotIndex + 1];
}

function organizeMedia(paths: string[]): CategorizedMedia {
  return paths.reduce((acc, path) => {
    const mediaType = getMediaType(path);
    if (!mediaType) return acc;

    const category = getCategory(path);
    if (!category) return acc;

    if (!acc[category]) {
      acc[category] = { images: [], videos: [] };
    }

    mediaType === "image"
      ? acc[category].images.push(path)
      : acc[category].videos.push(path);

    return acc;
  }, {} as CategorizedMedia);
}

/* ------------------ media hook ------------------ */

export const useMediaPaths = () => {
  const [mediaPaths, setMediaPaths] = useState<CategorizedMedia | null>(null);

  useEffect(() => {
    const modules = import.meta.glob("/src/assets/iotelligence/**/*", {
      eager: true,
      import: "default",
    });

    const paths = Object.values(modules) as string[];
    setMediaPaths(organizeMedia(paths));
  }, []);

  return mediaPaths;
};

/* ------------------ MAIN DATA HOOK ------------------ */

export const useIotelligenceData = () => {
  const media = useMediaPaths();

  if (!media) {
    return {
      loading: true,
      media: null,
      projects: [],
    };
  }

  const iotelligenceProjects: IotelligenceProject[] = [
    {
      title: "Camera Based Dimension Measurement",
      category: "camera-based",
      icon: RulerDimensionLine,
      description:
        "High-precision camera-based inspection system for dimensional measurement, concentricity analysis, pin-to-pin distance, and rivet validation with real-time visualization.",
      media: media.camera_based_dimension_measurement ?? { images: [], videos: [] },
      features: [
        "Camera Performed automated dimension measurement",
        "Logic measure pin to pin distance",
        "Module tracks production process flow",
      ],
      imageHint: "camera based dimension measurement",
    },

    {
      title: "Camera Based Part Inspection",
      category: "camera-based",
      icon: Cctv,
      description:
        "AI-powered vision inspection system used to detect missing, incorrect, or defective components such as inserts, threads, ball guides, rivets, and packing accuracy in real time.",
      media: media.camera_based_part_inspection ?? { images: [], videos: [] },
      features: [
        "Insert Detection",
        "Thread Detection",
        "Ball Guide Detection",
        "Rivent Detection",
        "Packing Inspection",
        "Crack Detection",
        "Gasket Detection",
        "Gasket Twist Detection",
        "Thread Detection",
        "Radiator Cap Inspection",
      ],
      imageHint: "machine vision inspection",
    },

    {
      title: "Insert Thread Inspection Using Computer Vision",
      category: "camera-based",
      icon: Cctv,
      description:
        "Automated insert and thread inspection system using computer vision to detect missing, damaged, or improperly assembled threaded inserts.",
      media: media.insert_thread_inspection_using_computer_vision ?? { images: [], videos: [] },
      features: [
        "Insert Thread Inspection",
        "Detailed Software Results",
        "PLC Validation",
      ],
      imageHint: "insert thread inspection",
    },

    {
      title: "Radiator Fan Orientation Detection",
      category: "camera-based",
      icon: Fan,
      description:
        "AI-based inspection system to detect correct and incorrect radiator fan orientation during assembly using computer vision.",
      media: media.radiator_Fan_orientiation_detection ?? { images: [], videos: [] },
      features: [
        "AI based fan orientation detection",
        "Real-time cloackwise direction verification",
        "Incorrect orientation automatic rejection",
        "Automated pass or fail validation",
      ],
      imageHint: "fan orientation detection",
    },

    {
      title: "Quality Module – OCR Based Part Validation",
      category: "camera-based",
      icon: TicketCheck,
      description:
        "OCR-powered quality inspection system for validating printed text, serial numbers, labels, and embossed characters on industrial components.",
      media: media.quality_module_ocr_based_part_validation ?? { images: [], videos: [] },
      features: [
        "OCR based alphanumeric text validation",
        "Embossed character recognition accuracy",
        "Printed label verification system",
        "Part marking compliance verification",
        "Traceability code extraction system"
      ],
      imageHint: "OCR based inspection",
    },

    {
      title: "Quality Module – Process Tracking",
      category: "camera-based",
      icon: ClipboardClock,
      description:
        "Real-time process monitoring and validation system to track assembly steps, operator actions, grease application, and process compliance.",
      media: media["quality_module_process+tracking"] ?? { images: [], videos: [] },
      features: [
        "Process Validation",
        "Operator monitoring",
        "Real time production Metrices",
        "Part Procccessing Tracking",
        "Live Data Annotation",
      ],
      imageHint: "process tracking system",
    },

    {
      title: "Manpower Management System",
      category: "dashbaord",
      icon: Users,
      description:
        "AI-enabled manpower monitoring and productivity tracking system for workforce efficiency and compliance.",
      media: media.manpower_management_system ?? { images: [], videos: [] },
      features: [
        "Attendance and absenteeism tracking.",
        "Permanent vs contractual workforce analysis.",
        "Late coming and punching analytics.",
        "Skill-based workforce allocation support.",
        "Data-driven manpower decision support.",
      ],
      imageHint: "manpower management",
    },

    {
      title: "Maximize Efficiency – OEE Dashboard",
      category: "dashboard",
      icon: ChartNoAxesCombined,
      description:
        "Comprehensive OEE dashboard for tracking machine availability, performance, quality, and overall production efficiency.",
      media: media.maximize_effeciency_OEE_dashboard ?? { images: [], videos: [] },
      features: [
        "Insert Detection",
        "Thread Detection",
        "Ball Guide Detection",
        "Rivent Detection",
        "Packing Inspection",
      ],
      imageHint: "OEE dashboard",
    },

    {
      title: "Part Traceability System",
      category: "dashbaord",
      icon: Bolt,
      description:
        "End-to-end part traceability solution to track components across production stages using vision and data logging.",
      media: media.part_tracebility ?? { images: [], videos: [] },
      features: [
        "System provides end to end traceability.",
        "Scanners track outward part dispatch.",
        "Dashboard monitors quality inspection status.",
        "System provides end to end traceability.",
        "QR codes identify parts and crates.",
      ],
      imageHint: "part traceability",
    },

    {
      title: "Part Weight & Count Validation",
      category: "dashboard",
      icon: Weight,
      description:
        "Automated system to validate part weight and quantity for accurate packing and dispatch verification.",
      media: media.part_weight_count_validation ?? { images: [], videos: [] },
      features: [
        "System validates correct part weight.",
        "Scales integrate with the software.",
        "Data syncs with central records."
      ],
      imageHint: "weight count validation",
    },

    {
      title: "SCADA Based Automation",
      category: "dashboard",
      icon: Workflow,
      description:
        "Industrial SCADA-based automation solutions for real-time monitoring, control, and reporting of manufacturing processes.",
      media: media.scada_based_automation ?? { images: [], videos: [] },
      features: [
        "SCADA controls automated material dosing.",
        "Operators select recipes on HMI.",
        "Dashboards provide live process monitoring.",
        "Logic records critical process parameters."
      ],
      imageHint: "SCADA automation",
    },

    {
      title: "Visual for EOL Testing Parameters",
      category: "dashboard",
      icon: ChartNoAxesCombined,
      description:
        "End-of-line visual inspection system to validate testing parameters, indicators, and final product quality.",
      media: media.visual_for_eol_testing_parameters ?? { images: [], videos: [] },
      features: [
        "Insert Detection",
        "Thread Detection",
        "Ball Guide Detection",
        "Rivent Detection",
        "Packing Inspection",
      ],
      imageHint: "EOL testing inspection",
    },
  ];


  return {
    loading: false,
    media,
    projects: iotelligenceProjects,
  };
};

// import { useEffect, useState } from "preact/hooks";
// type MediaMap = Record<string, string[]>;

// function groupByIotelligenceFolder(paths: string[]): MediaMap {
//   return paths.reduce((acc, path) => {

//     // Here we splits the path of the current string from /
//     const parts = path.split('/');

//     // Here we find index of iotelligence
//     const iotIndex = parts.indexOf('iotelligence');

//     // This will check the name of the folder if exists
//     if (iotIndex === -1 || !parts[iotIndex + 1]) return acc;

//     // Folder AFTER iotelligence
//     const category = parts[iotIndex + 1];

//     // Initialize array if not exists
//     if (!acc[category]) {
//       acc[category] = [];
//     }

//     // Push full path (or filename if you prefer)
//     acc[category].push(path);

//     return acc;
//   }, {} as MediaMap);
// }

// const ImageComponent = ({ classNames }: { classNames?: string }) => {
//   const [Images, setImages] = useState<string[]>();
//   useEffect(() => {
//     const imageModules = import.meta.glob('/src/assets/iotelligence/**/*', {
//       eager: true,
//       as: 'url',
//     });
//     const paths = Object.values(imageModules) as string[];
//     const groupedMedia = groupByIotelligenceFolder(paths);
//     const allImages = Object.values(groupedMedia)
//       .flat()
//       .filter(path =>
//         ["png", "jpg", "jpeg"].some(ext =>
//           path.endsWith(`.${ext}`)
//         )
//       );


//     console.log(allImages);
//     setImages(paths)
//   }, []);
//   return (
//     Images ? Images.map((item: string, index: number) => {
//       return (
//         <img className={classNames} key={index} src={item} alt={item} />
//       )
//     }) : null
//   );
// }

// export default ImageComponent;