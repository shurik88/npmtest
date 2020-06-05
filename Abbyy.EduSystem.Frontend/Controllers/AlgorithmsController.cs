using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Algorithms.Graphs.Model;
using Algorithms.Graphs.Model.AdjacencyLists;
using Algorithms.Greedy.MST;
using Algorithms.Sorting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Abbyy.EduSystem.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlgorithmsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var sortAlgorithm = new QuickSortAlgorithm(new RandElementPartitionStrategy(new System.Random()));
            var graph = new Graph(EdgeDirectionType.Undirected);
            graph.AddVertex(1);
            graph.AddVertex(2);
            graph.AddVertex(3);
            graph.AddVertex(4);

            graph.AddEdge(1, 2, 1, 1, EdgeDirectionType.Undirected);
            graph.AddEdge(2, 3, 2, 2, EdgeDirectionType.Undirected);
            graph.AddEdge(3, 4, 3, 5, EdgeDirectionType.Undirected);
            graph.AddEdge(4, 1, 4, 4, EdgeDirectionType.Undirected);
            graph.AddEdge(1, 3, 5, 3, EdgeDirectionType.Undirected);
            var algorithm = new PrimAlgorithm();
            var edges = algorithm.GetMST(graph).ToList();

            return Ok(edges);
        }
    }
}