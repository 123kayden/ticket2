namespace ForSmart2.Models
{

    public class NodeInput
    {
        public List<NodeDto> nodeList { get; set; }


    }

    public class NodeDto
    {

        public int nodeId { get; set; }

        public double X { get; set; }
        public double Y { get; set; }

    }
}