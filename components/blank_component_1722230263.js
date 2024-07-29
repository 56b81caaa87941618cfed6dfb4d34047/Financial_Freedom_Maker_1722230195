/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722230263", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <div class="flex">
                <div class="w-64 bg-purple-900 h-screen">
                    <nav class="mt-10">
                        <a href="#" class="flex items-center px-6 py-2 text-white hover:bg-purple-800 rounded-lg m-2">
                            <i class='bx bx-home mr-3'></i>
                            <span class="font-sans">Home</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-2 mt-4 text-white hover:bg-purple-800 rounded-lg m-2">
                            <i class='bx bx-info-circle mr-3'></i>
                            <span class="font-sans">About</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-2 mt-4 text-white hover:bg-purple-800 rounded-lg m-2">
                            <i class='bx bx-envelope mr-3'></i>
                            <span class="font-sans">Contact</span>
                        </a>
                    </nav>
                </div>
                <div class="flex-1">
                    <section id="blank-section" class="bg-white dark:bg-black flex-1">
                        <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

                        </div>
                    </section>
                </div>
            </div>
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
