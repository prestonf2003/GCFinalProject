namespace GCFinalProject.Models
{
    public class DnD
    {
        

            
                public string class_levels { get; set; }
                public int hit_die { get; set; }
                public string index { get; set; }
                public Multi_Classing multi_classing { get; set; }
                public string name { get; set; }
                public Proficiency1[] proficiencies { get; set; }
                public Proficiency_Choices[] proficiency_choices { get; set; }
                public Saving_Throws[] saving_throws { get; set; }
                public Starting_Equipment[] starting_equipment { get; set; }
                public Starting_Equipment_Options[] starting_equipment_options { get; set; }
                public Subclass[] subclasses { get; set; }
                public string url { get; set; }
            

            public class Multi_Classing
            {
                public Prerequisite[] prerequisites { get; set; }
                public Proficiency[] proficiencies { get; set; }
                public object[] proficiency_choices { get; set; }
            }

            public class Prerequisite
            {
                public Ability_Score ability_score { get; set; }
                public int minimum_score { get; set; }
            }

            public class Ability_Score
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Proficiency
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Proficiency1
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Proficiency_Choices
            {
                public int choose { get; set; }
                public From[] from { get; set; }
                public string type { get; set; }
            }

            public class From
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Saving_Throws
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Starting_Equipment
            {
                public Equipment equipment { get; set; }
                public int quantity { get; set; }
            }

            public class Equipment
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Starting_Equipment_Options
            {
                public int choose { get; set; }
                public From1[] from { get; set; }
                public string type { get; set; }
            }

            public class From1
            {
                public Equipment1 equipment { get; set; }
                public int quantity { get; set; }
                public Equipment_Option equipment_option { get; set; }
            }

            public class Equipment1
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Equipment_Option
            {
                public int choose { get; set; }
                public From2 from { get; set; }
                public string type { get; set; }
            }

            public class From2
            {
                public Equipment_Category equipment_category { get; set; }
            }

            public class Equipment_Category
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

            public class Subclass
            {
                public string index { get; set; }
                public string name { get; set; }
                public string url { get; set; }
            }

        }
    }

