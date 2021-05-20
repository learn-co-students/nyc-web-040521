class Backer
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def back_project(project)
    ProjectBacker.new(project, self)
  end

  # association methods (:
  # 1 to many (backer has many project backers)
  def project_backers
    # find all of self's projectBackers
    ProjectBacker.all.select { |projectBacker_instance| projectBacker_instance.backer == self }
  end

  # many to many (backer has many projects)
  def backed_projects
    # from those projectBackers, find the projects
    self.project_backers.map { |projectBacker_instance| projectBacker_instance.project }
  end
end
