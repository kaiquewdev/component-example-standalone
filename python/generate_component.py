'''Generate component'''

import os
import tags

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

{11}

{12}
{13}
'''.format(
    tags.Link({"rel":"stylesheet","href":"./css/component-example-standalone.css"}).html(),
    tags.Header(1).html('Component Example Standalone'),
    tags.Tag({'class':'first_paragraph'},'p').html('Modularized component'),
    tags.Tag({},'hr').html(),
    tags.Header(2).html('List items'),
    tags.Tag({'class':'component-example-standalone'},'ul').html(''.join([tags.Tag({},'li').html(tags.Tag({'href':'#'},'a').html('teste %s' % (i+1))) for i in range(2**8)])),
    tags.Tag({},'hr').html(),
    tags.Tag({'placeholder':'Fill the field...'},'input').html(),
    tags.Tag({},'textarea').html(),
    tags.Tag({},'hr').html(),
    tags.Tag({'class':'second_paragraph'},'p').html('Sample paragraph'),
    tags.Tag({},'hr').html(),
    tags.Tag({'src':'./dist/component-example-standalone.js'},'script').html(),
    tags.Tag({'src':'./dist/component-example-standalone-app.js'},'script').html(),
)
file_location = os.path.join(project_location,'component-example-standalone.html')
file_component = open(file_location,'w')

if __name__ == '__main__':
    file_component.write(raw_component)
    file_component.close()
