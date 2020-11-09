using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class Application: Entity
    {
        public string Code { get; set; }
        public string AppName { get; set; }
        public string Description { get; set; }

    }
}
