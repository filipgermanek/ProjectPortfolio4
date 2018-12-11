using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Livecode9.Controllers
{
    [Route("api/words")]
    public class WordsController : Controller
    {

        [HttpGet]
        public IActionResult GetWords()
        {
            var words = new List<object> {
                new { Text = "Lorem", Weight = 13.0},
                new { Text = "Ipsum", Weight = 10.5 },
                new { Text = "Dolor", Weight = 9.4 },
                new { Text = "Sit", Weight = 8.0 },
                new { Text = "Amet", Weight = 6.2 },
                new { Text = "Consectetur", Weight = 5.0 },
                new { Text = "Adipiscing", Weight = 5.0 }
            };
            return Ok(words);
        }
    }

    [Route("api/posts")]
    public class PostsController : Controller
    {

        [HttpGet]
        public IActionResult GetPosts()
        {
            var words = new List<object> {
                new { Title = "Post 1", Score = 5.0},
                new { Title = "Post 2", Score = 10.5 },
                new { Title = "Post 3", Score = 9.4 },
                new { Title = "Post 4", Score = 8.0 },
                new { Title = "Post 5", Score = 6.2 },
                new { Title = "Post 6", Score = 5.0 },
                new { Title = "Post 7", Score = 5.0 },
                 new { Title = "Post 8", Score = 5.0 },
                  new { Title = "Post 9", Score = 5.0 },
                   new { Title = "Post 10", Score = 5.0 },
                    new { Title = "Post 11", Score = 5.0 },
                     new { Title = "Post 12", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 },
                      new { Title = "Post 13", Score = 5.0 }
            };
            return Ok(words);
        }
    }
}
