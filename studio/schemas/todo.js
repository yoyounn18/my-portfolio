export default {
    name: 'todo',
    title: 'Todo',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "techstack",
            title: "Tech Stack",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ]
}