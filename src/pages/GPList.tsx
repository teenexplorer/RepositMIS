import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const GP_LIST = {
  "BHAGWANPUR -II": ["GP1", "GP2", "GP3"],
  "CONTAI -I": ["GP4", "GP5", "GP6"],
  "CONTAI -III": ["GP7", "GP8", "GP9"],
  "CONTAI MUNICIPALITY": ["GP10", "GP11", "GP12"],
  "DESHAPRAN": ["GP13", "GP14", "GP15"],
  "KHEJURI -I": ["GP16", "GP17", "GP18"],
  "KHEJURI -II": ["GP19", "GP20", "GP21"],
  "RAMNAGAR -I": ["GP22", "GP23", "GP24"],
  "RAMNAGAR -II": ["GP25", "GP26", "GP27"]
};

const GPList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">GP List</h1>
      <ScrollArea className="h-[calc(100vh-200px)] w-full">
        <div className="space-y-6 p-4">
          {Object.entries(GP_LIST).map(([block, gps]) => (
            <div key={block} className="space-y-2">
              <h2 className="text-xl font-semibold text-blue-600">{block}</h2>
              <div className="space-y-2 pl-4">
                {gps.map((gp, index) => (
                  <Button
                    key={index}
                    className="w-full text-left justify-start text-lg p-6"
                    variant="outline"
                    onClick={() => navigate(`/village-list/${index + 1}`)}
                  >
                    {gp}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GPList;