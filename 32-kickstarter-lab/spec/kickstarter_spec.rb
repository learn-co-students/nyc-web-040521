# frozen_string_literal: true

describe 'Backer - ::new' do
  it 'takes a name on initialization, accessible through an attribute reader' do
    backer = Backer.new('Avi')
    expect(backer.name).to eq('Avi')
  end
end

describe 'Project - ::new' do
  it 'takes a title on initialization, accessible through an attribute reader' do
    project = Project.new('Project With So Much Amaze')
    expect(project.title).to eq('Project With So Much Amaze')
  end
end

describe 'ProjectBacker' do
  describe '@@all' do
    it 'is a class variable set to an empty array' do
      expect(ProjectBacker.class_variable_get(:@@all)).to eq([])
    end
  end

  describe '.all' do
    it 'is a class method that returns the @@all class variable' do
      ProjectBacker.class_variable_set(:@@all, ["I'm sorry, Jon"])
      expect(ProjectBacker.all).to eq(["I'm sorry, Jon"])
    end
  end

  describe '::new' do
    it 'takes in a project and a backer on initialization, accessible through an attribute reader' do
      amaze_project = Project.new('Project With So Much Amaze')
      avi_backer = Backer.new('Avi')
      project_backer = ProjectBacker.new(amaze_project, avi_backer)
      expect(project_backer.project).to eq(amaze_project)
      expect(project_backer.backer).to eq(avi_backer)
    end

    it 'stores the new instance of ProjectBacker in the @@all class variable' do
      ProjectBacker.class_variable_set(:@@all, [])
      amaze_project = Project.new('Project With So Much Amaze')
      avi_backer = Backer.new('Avi')
      project_backer = ProjectBacker.new(amaze_project, avi_backer)
      expect(ProjectBacker.all).to eq([project_backer])
    end
  end
end

describe 'Backer - #back_project' do
  it 'is an instance method that accepts a project as an argument and creates a ProjectBacker, associating the project with this backer' do
    ProjectBacker.class_variable_set(:@@all, [])
    spencer = Backer.new('Spencer')
    magic = Project.new('Magic The Gathering Thing')

    # If we are calling this method in this way, what type of argument is it taking?
    # We are actually passing in a Project object! Cool, huh?
    spencer.back_project(magic)
    expect(ProjectBacker.all.first.project).to eq(magic)
    expect(ProjectBacker.all.first.backer).to eq(spencer)
  end
end

describe 'Project - #add_backer' do
  it 'is an instance method that accepts a backer as an argument and creates a ProjectBacker, associating the backer with this project' do
    ProjectBacker.class_variable_set(:@@all, [])
    book = Project.new('Ruby, Ruby, and More Ruby')
    steven = Backer.new('Steven')

    # Same here. We are actually passing around a Backer object. This is pretty
    # simple functionality, but objects can interact with one another in really
    # cool ways.
    book.add_backer(steven)

    expect(ProjectBacker.all.first.project).to eq(book)
    expect(ProjectBacker.all.first.backer).to eq(steven)
  end
end

describe 'Backer - backed_projects' do
  it 'returns an array of projects associated with this Backer instance' do
    ProjectBacker.class_variable_set(:@@all, [])
    book = Project.new('Ruby, Ruby, and More Ruby')
    magic = Project.new('Magic The Gathering Thing')
    karaoke = Project.new('Karaoke')
    steven = Backer.new('Steven')
    spencer = Backer.new('Spencer')
    meryl = Backer.new('Meryl')

    meryl.back_project(karaoke)
    steven.back_project(karaoke)
    steven.back_project(magic)
    spencer.back_project(book)
    meryl.back_project(book)

    expect(meryl.backed_projects).to eq([karaoke, book])
    expect(steven.backed_projects).to eq([karaoke, magic])
    expect(spencer.backed_projects).to eq([book])
  end
end

describe 'Project - backers' do
  it 'returns an array of backers associated with this Project instance' do
    ProjectBacker.class_variable_set(:@@all, [])
    book = Project.new('Ruby, Ruby, and More Ruby')
    magic = Project.new('Magic The Gathering Thing')
    karaoke = Project.new('Karaoke')
    steven = Backer.new('Steven')
    spencer = Backer.new('Spencer')
    meryl = Backer.new('Meryl')

    book.add_backer(steven)
    book.add_backer(meryl)
    karaoke.add_backer(meryl)
    magic.add_backer(steven)
    karaoke.add_backer(steven)

    expect(book.backers).to eq([steven, meryl])
    expect(karaoke.backers).to eq([meryl, steven])
    expect(magic.backers).to eq([steven])
  end
end
