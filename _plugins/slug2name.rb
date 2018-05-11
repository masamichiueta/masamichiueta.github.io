module Jekyll
    module Slug2Name
        def slug2name(input)
            slug = @context.registers[:site].config['category_slugs'][input]
            slug ? slug : input
        end
    end
end
Liquid::Template.register_filter(Jekyll::Slug2Name)