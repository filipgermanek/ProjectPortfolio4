using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Livecode9.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Livecode9.Controllers
{

    [Route("api/persons")]
    public class PersonsController : Controller
    {
        List<Person> _persons;

        public PersonsController()
        {
            _persons = Data.Persons;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_persons);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var person = _persons.FirstOrDefault(x => x.Id == id);
            if (person == null) return NotFound();
            return Ok(person);
        }
    }

}
