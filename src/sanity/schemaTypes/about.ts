import { defineField, defineType } from "sanity";

 const about = defineType({
    name : "about",
    type : "document",
    title : "About",
    fields : [
        defineField({
            name : "title",
            type : "string",
            title : "Title",
            validation : (Rule) => Rule.required(),
        }),
        defineField({
            name : "about",
            type : "string",
            title : "About Description",
            validation : (Rule) => Rule.required(),
        }),
        defineField({
            name : "buttontext",
            type : "string",
            title : "Button Text",
            validation : (Rule) => Rule.required(),
        }),
        defineField({
            name : "buttonLink",
            type : "url",
            title : "Button Url",
            validation : (Rule) => Rule.required(),
        }),
        defineField({
            name : "image",
            type : "image",
            title : "Image",
            validation : (Rule) => Rule.required(),
        }),
        


    ]
 })

 export default about