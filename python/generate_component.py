'''Generate component'''

import os
import tags

class Hr(object):
    def __init__(self):
        pass

    def __str__(self):
        return '<hr></hr>'

class UnorderedList(object):
    def __init__(self,selector="component-example-standalone",html=""):
        self.selector = selector
        self.html = html

    def __str__(self):
        return '<ul class="%s">%s</ul>' % (self.selector,self.html)

class ListItem(object):
    def __init__(self,html=''):
        self.html = html

    def __str__(self):
        return '<li>%s</li>' % (self.html)

class Anchor(object):
    def __init__(self,href='',html=''):
        self.href = href
        self.html = html

    def __str__(self):
        return '<a href="%s">%s</a>' % (self.href,self.html)

class InputField(object):
    def __init__(self):
        pass

    def __str__(self):
        return '<input placeholder="Fill the field..." />'

class Textarea(object):
    def __init__(self):
        pass

    def __str__(self):
        return '<textarea></textarea>'

class Script(object):
    def __init__(self,src=""):
        self.src = src

    def __str__(self):
        return '<script src="%s"/>' % (self.src)

project_location = os.path.join(os.environ['HOME'],'war/component-example-standalone/')
raw_component = '''
{0}

{1}

{2}

{3}

{4}

{5}

{6}

{7}

{8}

{9}
{10}
'''.format(
    tags.Link({"rel":"stylesheet","href":"./css/component-example-standalone.css"}).html(),
    tags.Header(1).html('Component Example Standalone'),
    tags.Paragraph().html('Modularized component'),
    tags.Tag({},'hr').html(),
    tags.Header(2).html('List items'),
    UnorderedList(html=''.join([
        tags.Tag({},'li').html(tags.Tag({'href':'#'},'a').html('teste 1')),
        tags.Tag({},'li').html(tags.Tag({'href':'#'},'a').html('teste 2')),
        tags.Tag({},'li').html(tags.Tag({'href':'#'},'a').html('teste 3')),
    ])).__str__(),
    tags.Tag({},'hr').html(),
    tags.Tag({'placeholder':'Fill the field...'},'input').html(),
    tags.Tag({},'textarea').html(),
    tags.Tag({},'hr').html(),
    tags.Tag({'src':'./dist/component-example-standalone.js'}).html(),
    tags.Tag({'src':'./dist/component-example-standalone-app.js'}).html(),
)
file_location = os.path.join(project_location,'component-example-standalone.html')
file_component = open(file_location,'w')

if __name__ == '__main__':
    file_component.write(raw_component)
    file_component.close()
